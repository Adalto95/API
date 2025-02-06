const validate = (shema) => (req, res, next) => {
    try {
        shema.parse(req.body);
        next();
    } catch (e) {
        res.status(400).json({error: e.errors} );
        }
};
export{validate};
