import Login from "../src/Modules/Login";

const login = new Login();

describe("Login", () => {
    beforeAll(() => {
                
    });
    
    it("should login the form", () => {
        login.doLogin();
    });

});