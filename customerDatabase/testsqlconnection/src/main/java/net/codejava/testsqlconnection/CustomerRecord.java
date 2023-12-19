package net.codejava.testsqlconnection;

public class CustomerRecord {
	private String CustomerKey;
	private String FirstName;
	private String MiddleName;
	private String LastName;
	private String MobileNo;
	private String AltMobileNo;
	private String Gender;
	private String CompleteAddress;
	private String Locality;
	private String Taluka;
	private String PinCode;
	private String DateOfBirth;
	private String Occupation;
	private String Employer;
	private String EmailId;
	private String Comments;




	public String getCustomerKey() {
		return CustomerKey;
	}
	public void setCustomerKey(String customerKey) {
		CustomerKey = customerKey;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getMiddleName() {
		return MiddleName;
	}
	public void setMiddleName(String middleName) {
		MiddleName = middleName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getMobileNo() {
		return MobileNo;
	}
	public void setMobileNo(String mobileNo) {
		MobileNo = mobileNo;
	}
	public String getAltMobileNo() {
		return AltMobileNo;
	}
	public void setAltMobileNo(String altMobileNo) {
		AltMobileNo = altMobileNo;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public String getCompleteAddress() {
		return CompleteAddress;
	}
	public void setCompleteAddress(String completeAddress) {
		CompleteAddress = completeAddress;
	}
	public String getLocality() {
		return Locality;
	}
	public void setLocality(String locality) {
		Locality = locality;
	}
	public String getTaluka() {
		return Taluka;
	}
	public void setTaluka(String taluka) {
		Taluka = taluka;
	}
	public String getPinCode() {
		return PinCode;
	}
	public void setPinCode(String pinCode) {
		PinCode = pinCode;
	}
	public String getDateOfBirth() {
		return DateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		DateOfBirth = dateOfBirth;
	}
	public String getOccupation() {
		return Occupation;
	}
	public void setOccupation(String occupation) {
		Occupation = occupation;
	}
	public String getEmployer() {
		return Employer;
	}
	public void setEmployer(String employer) {
		Employer = employer;
	}
	public String getEmailId() {
		return EmailId;
	}
	public void setEmailId(String emailId) {
		EmailId = emailId;
	}
	public String getComments() {
		return Comments;
	}
	public void setComments(String comments) {
		Comments = comments;
	}

	


	@Override
	public String toString() {
		return "CustomerRecord [CustomerKey=" + CustomerKey + ", FirstName=" + FirstName + ", MiddleName=" + MiddleName
				+ ", LastName=" + LastName + ", MobileNo=" + MobileNo + ", AltMobileNo=" + AltMobileNo + ", Gender="
				+ Gender + ", CompleteAddress=" + CompleteAddress + ", Locality=" + Locality + ", Taluka=" + Taluka
				+ ", PinCode=" + PinCode + ", DateOfBirth=" + DateOfBirth + ", Occupation=" + Occupation + ", Employer="
				+ Employer + ", EmailId=" + EmailId + ", Comments=" + Comments + "]";
	}
}