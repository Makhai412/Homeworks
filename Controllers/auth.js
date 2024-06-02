const crearUsuario = (req, res) => {
    const { name, email, password } = req.body;
    
    res.status(200).json({
        ok: true,
        name,
        email
    });
}

const loginUsuario = (req, res) => {
    
    res.json({
        ok: true
    });
}

const revalidarToken = (req, res) => {
    
    res.json({
        ok: true
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}