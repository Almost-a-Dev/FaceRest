const handleProfile = db => (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({id})
    .then(user => {
        user.length ? res.json(user[0]) : res.status(400).json('User not  found!');
    })
    .catch(err => res.status(400).json('There is a problem with the user requested'))

}

module.exports = {
    handleProfile: handleProfile
}