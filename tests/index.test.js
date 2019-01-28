import Login from "../modules/Login";

const login = new Login();

describe("Login", () => {
    beforeAll(() => {
                
    });
    
    it("should login the form", () => {
        login.doLogin();
    });

});