export const getDishes = (req, res) =>{
    res.send("this is get route");
}

export const getDishID = (req, res) =>{
    const id = req.params.id;
    res.send(id)
}