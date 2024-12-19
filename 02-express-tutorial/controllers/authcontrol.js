const logon = (req, res)=> {
    const {name} = req.body;

    if (!name) {
        return res.status(400).json({message: 'Name is required'});
    }

    res.cookie('name', name);
    res.status(201).json({message: `Hello, ${name}!`});
};

const logoff = (req, res) => {
    res.clearCookie('name');
    res.status(200).json({message: 'Logged off successfully'});
};

const test = (req, res) => {
    res.status(200).json({message: `Welcome, ${req.user}!`});
};

module.exports= {logon, logoff, test};