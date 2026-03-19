class SignupData {
    constructor(json_data) {
        this.first_name = json_data.first_name;
        this.last_name = json_data.last_name;
        this.email = json_data.email;
        this.dob = json_data.dob;
        this.semester = json_data.semester;
        this.gender = json_data.gender.toLowerCase();
        this.interests = json_data.interests.toLowerCase();
        this.major = json_data.major.toLowerCase().replace(' ', '_');
        this.study_style = json_data.study_style.toLowerCase();
        this.time_availible = json_data.time_availible.toLowerCase();
    }

    get_signup_data() {
        return this;
    }

    get_signup_data_json() {
        return JSON.stringify(this);
    }
}