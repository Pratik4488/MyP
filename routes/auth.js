const router = require("express").Router();
const Researcher = require("../schema/researcher")
const bcrypt = require("bcrypt")

router.post("/register", async (req, res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        // create new researcher in DB

        const newResearcher = new Researcher({
            // username: req.body.username,
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword,
            // gender: req.body.gender,
        })

        const user = await newResearcher.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(error);
    }
})


router.post("/login", async (req, res)=>{
    try {
        const researcher = await Researcher.findOne({email:req.body.email})
        !researcher && res.send(404).json("user not exsist...")

        // validate password
        const validPassword = await bcrypt.compare(req.body.password, researcher.password);

        !validPassword && res.send(404).json("Wrong password...")

        res.status(200).json(researcher);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})



module.exports = router;