import rSignUpForm from "../models/rSignUpFormModel.js";

const postRSignUp = async (req,res) =>{
    const data = req.body;
    console.log(data);
    try {
        const rSignUp = new rSignUpForm({
            fName:data.fName,
            lName:data.lName,
            uName:data.uName,
            phone:data.phone,
            email:data.email,
            pass:data.pass,
            cPass:data.cPass,
            userType:"restaurant"
        });

        await rSignUp.save();
    }catch(error){
        console.error(error);
    };

}

export { postRSignUp };