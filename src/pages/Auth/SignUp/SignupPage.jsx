import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import { createAccount } from "../../../services/accountService.js";
import "./SignupPage.css";

const createEmptyFamilyMember = () => ({
  childFirstName: "",
  childLastName: "",
  childGender: "",
  childDoB: "",
  relationship: "",
});

const familyRelationshipOptions = [
  { value: "Child", label: "Child (Son or Daughter)" },
  { value: "Spouse", label: "Spouse (Wife or Husband)" },
];

const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) {
    return digits ? `(${digits}` : "";
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const passwordRequirements = (password, firstName, lastName) => {
  const issues = [];
  const trimmedPassword = password.trim();

  if (!trimmedPassword) {
    issues.push("Password is required.");
    return issues;
  }

  if (trimmedPassword.length < 8) {
    issues.push("Password must be at least 8 characters long.");
  }

  if (!/[A-Z]/.test(trimmedPassword)) {
    issues.push("Password must contain at least one uppercase letter.");
  }

  if (!/[a-z]/.test(trimmedPassword)) {
    issues.push("Password must contain at least one lowercase letter.");
  }

  if (!/[0-9]/.test(trimmedPassword)) {
    issues.push("Password must contain at least one number.");
  }

  if (!/[^A-Za-z0-9]/.test(trimmedPassword)) {
    issues.push("Password must contain at least one special character.");
  }

  if (
    firstName &&
    trimmedPassword.toLowerCase().includes(firstName.trim().toLowerCase())
  ) {
    issues.push("Password cannot contain your first name.");
  }

  if (
    lastName &&
    trimmedPassword.toLowerCase().includes(lastName.trim().toLowerCase())
  ) {
    issues.push("Password cannot contain your last name.");
  }

  return issues;
};

function SignupPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    membershipType: "Individual",
    password: "",
    confirmPassword: "",
    familyMembers: [createEmptyFamilyMember()],
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const getRelationshipOptionsForMember = (memberIndex) => {
    const spouseAlreadyExists = formData.familyMembers.some(
      (member, index) =>
        index !== memberIndex && member.relationship === "Spouse",
    );

    return familyRelationshipOptions.map((option) => ({
      ...option,
      disabled:
        option.value === "Spouse" &&
        spouseAlreadyExists &&
        formData.familyMembers[memberIndex]?.relationship !== "Spouse",
    }));
  };

  const totalSteps = useMemo(
    () => (formData.membershipType === "Family" ? 3 : 2),
    [formData.membershipType],
  );

  const stepLabel =
    currentStep === 1
      ? "Basic Information"
      : currentStep === 2
        ? "Membership & Security"
        : "Family Members";

  const handleFieldChange = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  };

  const handleMembershipTypeChange = (value) => {
    setFormData((current) => ({
      ...current,
      membershipType: value,
      familyMembers:
        value === "Family"
          ? current.familyMembers.length
            ? current.familyMembers
            : [createEmptyFamilyMember()]
          : [],
    }));

    setErrors((current) => ({
      ...current,
      membershipType: "",
      familyMembers: "",
    }));
  };

  const handleFamilyMemberChange = (index, field, value) => {
    setFormData((current) => ({
      ...current,
      familyMembers: current.familyMembers.map((member, memberIndex) =>
        memberIndex === index ? { ...member, [field]: value } : member,
      ),
    }));

    setErrors((current) => ({
      ...current,
      familyMembers: "",
    }));
  };

  const addFamilyMember = () => {
    setFormData((current) => ({
      ...current,
      familyMembers: [...current.familyMembers, createEmptyFamilyMember()],
    }));
  };

  const removeFamilyMember = (index) => {
    setFormData((current) => {
      const nextFamilyMembers = current.familyMembers.filter(
        (_, memberIndex) => memberIndex !== index,
      );

      return {
        ...current,
        familyMembers:
          nextFamilyMembers.length > 0
            ? nextFamilyMembers
            : [createEmptyFamilyMember()],
      };
    });
  };

  const validateStep = (step) => {
    const nextErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) {
        nextErrors.firstName = "First name is required.";
      }

      if (!formData.lastName.trim()) {
        nextErrors.lastName = "Last name is required.";
      }

      if (!formData.gender) {
        nextErrors.gender = "Please select your gender.";
      }

      if (!formData.email.trim()) {
        nextErrors.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        nextErrors.email = "Please enter a valid email address.";
      }

      if (!formData.phone.trim()) {
        nextErrors.phone = "Phone number is required.";
      }
    }

    if (step === 2) {
      if (!formData.membershipType) {
        nextErrors.membershipType = "Membership type is required.";
      }

      const passwordIssues = passwordRequirements(
        formData.password,
        formData.firstName,
        formData.lastName,
      );
      if (passwordIssues.length > 0) {
        nextErrors.password = passwordIssues[0];
      }

      if (!formData.confirmPassword) {
        nextErrors.confirmPassword = "Please confirm your password.";
      } else if (formData.confirmPassword !== formData.password) {
        nextErrors.confirmPassword = "Passwords do not match.";
      }
    }

    if (step === 3) {
      if (formData.familyMembers.length < 1) {
        nextErrors.familyMembers =
          "Family membership requires at least one family member.";
      } else {
        const spouseCount = formData.familyMembers.filter(
          (member) => member.relationship === "Spouse",
        ).length;

        if (spouseCount > 1) {
          nextErrors.familyMembers =
            "Only one spouse can be added to a family membership.";
        }

        const invalidMember = formData.familyMembers.some((member) => {
          const isRelationshipValid =
            member.relationship === "Child" || member.relationship === "Spouse";
          const requiresDob = member.relationship === "Child";

          return (
            !member.childFirstName.trim() ||
            !member.childLastName.trim() ||
            !member.childGender ||
            (requiresDob && !member.childDoB) ||
            !member.relationship.trim() ||
            !isRelationshipValid
          );
        });

        if (!nextErrors.familyMembers && invalidMember) {
          nextErrors.familyMembers =
            "Please complete each family member entry and choose either Child or Spouse. Children also require a date of birth.";
        }
      }
    }

    return nextErrors;
  };

  const handleNextStep = () => {
    const nextErrors = validateStep(currentStep);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }

    if (currentStep === 2) {
      if (formData.membershipType === "Family") {
        setCurrentStep(3);
      } else {
        handleSubmit();
      }
      return;
    }

    if (currentStep === 3) {
      handleSubmit();
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
      setErrors({});
      setApiError("");
    }
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    setApiError("");

    const nextErrors = validateStep(currentStep);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const payload = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      gender: formData.gender,
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      password: formData.password,
      membershipType: formData.membershipType,
      ...(formData.membershipType === "Family" && {
        familyMembers: formData.familyMembers.map((member) => ({
          childFirstName: member.childFirstName.trim(),
          childLastName: member.childLastName.trim(),
          childGender: member.childGender,
          childDoB: member.childDoB,
          relationship: member.relationship.trim(),
        })),
      }),
    };

    setIsSubmitting(true);

    try {
      await createAccount(payload);
      setErrors({});
      setSuccessMessage(
        "Your account has been created. Please check your email to verify your account.",
      );
    } catch (error) {
      const errorMessage =
        error?.message || "Unable to create your account right now.";
      setApiError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="signup-page">
        <section className="signup-layout" aria-labelledby="signup-title">
          <div className="signup-branding">
            <span className="signup-branding__badge">
              Welcome to the community
            </span>
            <h1 id="signup-title">Create Your Account</h1>
            <p className="signup-branding__subtitle">
              Join the Sudanese American Society and become part of our
              community.
            </p>

            <div
              className="signup-branding__card"
              aria-label="Community highlights"
            >
              <div className="signup-branding__stat">
                <strong>Community</strong>
                <span>Support, belonging, and connection</span>
              </div>
              <div className="signup-branding__stat">
                <strong>Heritage</strong>
                <span>Preserve culture and identity</span>
              </div>
              <div className="signup-branding__stat">
                <strong>Service</strong>
                <span>Show up for one another</span>
              </div>
            </div>
          </div>

          <div className="signup-card">
            {successMessage ? (
              <div className="signup-success" role="status" aria-live="polite">
                <div className="signup-success__icon" aria-hidden="true">
                  ✓
                </div>
                <h2>Account created</h2>
                <p>{successMessage}</p>
                <p className="signup-success__note">
                  Creating an account does not automatically grant access to the
                  WhatsApp group. Access is available to paying members once their
                  membership is active.
                </p>
                <button
                  type="button"
                  className="signup-success__button"
                  onClick={() => navigate("/verify-email")}
                >
                  Continue to Email Verification
                </button>
              </div>
            ) : (
              <form className="signup-form" onSubmit={handleSubmit} noValidate>
                <div className="signup-form__header">
                  <p className="eyebrow eyebrow--green">Join us</p>
                  <h2>{stepLabel}</h2>
                </div>

                <div className="signup-progress" aria-label="Signup progress">
                  {Array.from({ length: totalSteps }, (_, index) => {
                    const stepNumber = index + 1;
                    return (
                      <div
                        key={stepNumber}
                        className={`signup-progress__step ${
                          currentStep >= stepNumber
                            ? "signup-progress__step--active"
                            : ""
                        }`}
                      >
                        {stepNumber}
                      </div>
                    );
                  })}
                </div>

                {apiError ? (
                  <p className="form-error form-error--api">{apiError}</p>
                ) : null}

                {currentStep === 1 ? (
                  <div className="signup-form__grid">
                    <label className="field">
                      <span>
                        First Name{" "}
                        <span aria-hidden="true" className="required-indicator">
                          *
                        </span>
                      </span>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(event) =>
                          handleFieldChange("firstName", event.target.value)
                        }
                        placeholder="Your first name"
                        aria-invalid={Boolean(errors.firstName)}
                      />
                      {errors.firstName ? (
                        <small className="field-error">
                          {errors.firstName}
                        </small>
                      ) : null}
                    </label>

                    <label className="field">
                      <span>
                        Last Name{" "}
                        <span aria-hidden="true" className="required-indicator">
                          *
                        </span>
                      </span>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(event) =>
                          handleFieldChange("lastName", event.target.value)
                        }
                        placeholder="Your last name"
                        aria-invalid={Boolean(errors.lastName)}
                      />
                      {errors.lastName ? (
                        <small className="field-error">{errors.lastName}</small>
                      ) : null}
                    </label>

                    <label className="field">
                      <span>
                        Gender{" "}
                        <span aria-hidden="true" className="required-indicator">
                          *
                        </span>
                      </span>
                      <select
                        value={formData.gender}
                        onChange={(event) =>
                          handleFieldChange("gender", event.target.value)
                        }
                        aria-invalid={Boolean(errors.gender)}
                      >
                        <option value="">Select gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                      </select>
                      {errors.gender ? (
                        <small className="field-error">{errors.gender}</small>
                      ) : null}
                    </label>

                    <label className="field">
                      <span>
                        Phone Number{" "}
                        <span aria-hidden="true" className="required-indicator">
                          *
                        </span>
                      </span>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(event) =>
                          handleFieldChange(
                            "phone",
                            formatPhoneNumber(event.target.value),
                          )
                        }
                        placeholder="(555) 123-4567"
                        aria-invalid={Boolean(errors.phone)}
                      />
                      {errors.phone ? (
                        <small className="field-error">{errors.phone}</small>
                      ) : null}
                    </label>

                    <label className="field field--full">
                      <span>
                        Email{" "}
                        <span aria-hidden="true" className="required-indicator">
                          *
                        </span>
                      </span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          handleFieldChange("email", event.target.value)
                        }
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                      />
                      {errors.email ? (
                        <small className="field-error">{errors.email}</small>
                      ) : null}
                    </label>
                  </div>
                ) : null}

                {currentStep === 2 ? (
                  <div className="signup-form__grid">
                    <label className="field field--full">
                      <span>
                        Membership Type{" "}
                        <span aria-hidden="true" className="required-indicator">
                          *
                        </span>
                      </span>
                      <select
                        value={formData.membershipType}
                        onChange={(event) =>
                          handleMembershipTypeChange(event.target.value)
                        }
                        aria-invalid={Boolean(errors.membershipType)}
                      >
                        <option value="Individual">Individual</option>
                        <option value="Family">Family</option>
                      </select>
                      <p className="membership-help">
                        Individual members age 18 and under do not pay. Family
                        memberships still require payment.
                      </p>
                      {errors.membershipType ? (
                        <small className="field-error">
                          {errors.membershipType}
                        </small>
                      ) : null}
                    </label>

                    <div className="field field--full">
                      <label className="field__label">
                        Password{" "}
                        <span aria-hidden="true" className="required-indicator">
                          *
                        </span>
                      </label>
                      <div className="password-field">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(event) =>
                            handleFieldChange("password", event.target.value)
                          }
                          placeholder="Create a password"
                          aria-invalid={Boolean(errors.password)}
                        />
                        <button
                          type="button"
                          className="show-password"
                          onClick={() => setShowPassword((current) => !current)}
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                      {errors.password ? (
                        <small className="field-error">{errors.password}</small>
                      ) : null}
                    </div>

                    <div className="field field--full">
                      <label className="field__label">
                        Confirm Password{" "}
                        <span aria-hidden="true" className="required-indicator">
                          *
                        </span>
                      </label>
                      <div className="password-field">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={(event) =>
                            handleFieldChange(
                              "confirmPassword",
                              event.target.value,
                            )
                          }
                          placeholder="Re-enter your password"
                          aria-invalid={Boolean(errors.confirmPassword)}
                        />
                        <button
                          type="button"
                          className="show-password"
                          onClick={() =>
                            setShowConfirmPassword((current) => !current)
                          }
                        >
                          {showConfirmPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                      {errors.confirmPassword ? (
                        <small className="field-error">
                          {errors.confirmPassword}
                        </small>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                {currentStep === 3 ? (
                  <div className="family-members">
                    <div className="family-members__header">
                      <div>
                        <h3>Family Members</h3>
                        <p>
                          At least one family member is required for Family
                          membership.
                        </p>
                      </div>
                      <button
                        type="button"
                        className="family-button"
                        onClick={addFamilyMember}
                      >
                        + Add member
                      </button>
                    </div>

                    {formData.familyMembers.map((member, index) => (
                      <div
                        key={`family-member-${index}`}
                        className="family-member-card"
                      >
                        <div className="family-member-card__top">
                          <h4>Family Member {index + 1}</h4>
                          {formData.familyMembers.length > 1 ? (
                            <button
                              type="button"
                              className="family-remove"
                              onClick={() => removeFamilyMember(index)}
                              aria-label={`Remove family member ${index + 1}`}
                            >
                              Remove
                            </button>
                          ) : null}
                        </div>

                        <div className="family-member-card__grid">
                          <label className="field">
                            <span>
                              First Name{" "}
                              <span
                                aria-hidden="true"
                                className="required-indicator"
                              >
                                *
                              </span>
                            </span>
                            <input
                              type="text"
                              value={member.childFirstName}
                              onChange={(event) =>
                                handleFamilyMemberChange(
                                  index,
                                  "childFirstName",
                                  event.target.value,
                                )
                              }
                              placeholder="Family member first name"
                            />
                          </label>

                          <label className="field">
                            <span>
                              Last Name{" "}
                              <span
                                aria-hidden="true"
                                className="required-indicator"
                              >
                                *
                              </span>
                            </span>
                            <input
                              type="text"
                              value={member.childLastName}
                              onChange={(event) =>
                                handleFamilyMemberChange(
                                  index,
                                  "childLastName",
                                  event.target.value,
                                )
                              }
                              placeholder="Family member last name"
                            />
                          </label>

                          <label className="field field--full">
                            <span>
                              Relationship{" "}
                              <span
                                aria-hidden="true"
                                className="required-indicator"
                              >
                                *
                              </span>
                            </span>
                            <select
                              value={member.relationship}
                              onChange={(event) =>
                                handleFamilyMemberChange(
                                  index,
                                  "relationship",
                                  event.target.value,
                                )
                              }
                              aria-invalid={Boolean(errors.familyMembers)}
                            >
                              <option value="">Select relationship</option>
                              {getRelationshipOptionsForMember(index).map(
                                (option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                    disabled={option.disabled}
                                  >
                                    {option.label}
                                  </option>
                                ),
                              )}
                            </select>
                          </label>

                          <label className="field">
                            <span>
                              Gender{" "}
                              <span
                                aria-hidden="true"
                                className="required-indicator"
                              >
                                *
                              </span>
                            </span>
                            <select
                              value={member.childGender}
                              onChange={(event) =>
                                handleFamilyMemberChange(
                                  index,
                                  "childGender",
                                  event.target.value,
                                )
                              }
                            >
                              <option value="">Select gender</option>
                              <option value="M">Male</option>
                              <option value="F">Female</option>
                            </select>
                          </label>

                          {member.relationship === "Child" ? (
                            <label className="field">
                              <span>
                                Date of Birth{" "}
                                <span
                                  aria-hidden="true"
                                  className="required-indicator"
                                >
                                  *
                                </span>
                              </span>
                              <input
                                type="date"
                                value={member.childDoB}
                                onChange={(event) =>
                                  handleFamilyMemberChange(
                                    index,
                                    "childDoB",
                                    event.target.value,
                                  )
                                }
                              />
                            </label>
                          ) : null}
                        </div>
                      </div>
                    ))}

                    {errors.familyMembers ? (
                      <small className="field-error field-error--family">
                        {errors.familyMembers}
                      </small>
                    ) : null}
                  </div>
                ) : null}

                <div className="signup-form__footer">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      className="signup-form__secondary"
                      onClick={handlePreviousStep}
                    >
                      Back
                    </button>
                  ) : null}

                  {currentStep === totalSteps ? (
                    <button
                      type="submit"
                      className="signup-form__submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating account..." : "Create Account"}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="signup-form__submit"
                      onClick={handleNextStep}
                      disabled={isSubmitting}
                    >
                      Continue
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default SignupPage;
