import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showForm } from "../app/features/dishFormSlice"

const NewDishe = ()=>{
    const [newCat, setNewCat] = useState(false);

    const dispatch = useDispatch();

    return(
        <div className="formContainer">
            <div className="dishForm">
                <form>
                    <div className="prime">
                        <div className="dName">
                            <label htmlFor="name">Dish Name</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="dPrice">
                            <label htmlFor="price">Price</label>
                            <input type="text" name="price" id="price"/>
                        </div>
                        <div className="dServes">
                            <label htmlFor="serves">Serves</label>
                            <input type="text" name="serves" id="serves"/>
                        </div>
                        <div className="dDescription">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" cols="30" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="cat">
                        {!newCat ? 
                        <div>
                            <div className="r1">
                                <label htmlFor="category">Custom Category</label>
                                <select name="category" id="category">
                                    <option value="none">Select from previous category</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-outline-success" onClick={()=>setNewCat(true)}>Create new category</button>
                            <button type="button" className="btn btn-outline-danger">Delete a category</button>
                        </div>
                        :  
                        <div>
                            <label htmlFor="newCat">Create new Category</label>
                            <input type="text" name="newCat" id="newCat" />
                            <button type="button" className="btn btn-success" >Create</button>
                            <button type="button" className="btn btn-warning" onClick={()=>setNewCat(false)} >Cancel</button>
                        </div>
                        }
                    </div>

                    {/* ----------------1/2 */}
                    <div className="dType">
                        <fieldset>
                            <legend>Dish Type</legend>
                            <div>
                                <input type="radio" name="type" id="veg"/>
                                <label htmlFor="veg">Veg</label>
                            </div>
                            <div>
                                <input type="radio" name="type" id="non"/>
                                <label htmlFor="non">Non-veg</label>
                            </div>
                        </fieldset>
                    </div>

{/* ------for next iteration----- */}
                    {/* <div className="cuisine">
                        <fieldset>
                            <legend>Cuisine Type</legend>
                            <div className="indian">
                                <input type="checkbox" name="northIndian" id="northIndian" />
                                <label htmlFor="northIndian">North Indian</label>
                            </div>
                            <div className="indian">
                                <input type="checkbox" name="southIndian" id="southIndian" />
                                <label htmlFor="southIndian">South Indian</label>
                            </div>
                            <div className="european">
                                <input type="checkbox" name="Continental" id="Continental" />
                                <label htmlFor="Continental">Continental</label>
                            </div>
                            <div className="mEast">
                                <input type="checkbox" name="arabian" id="arabian" />
                                <label htmlFor="arabian">Arabian</label>
                            </div>
                            <div className="chineseCuisine">
                                <input type="checkbox" name="chinese" id="chinese" />
                                <label htmlFor="chinese">Chinese</label>
                            </div>
                            <div className="jp">
                                <input type="checkbox" name="japanese" id="japanese" />
                                <label htmlFor="japanese">Japanese</label>
                            </div>
                            <div className="thaiCuisine">
                                <input type="checkbox" name="thai" id="thai" />
                                <label htmlFor="thai">Thai</label>
                            </div>
                            <div className="amrcn">
                                <input type="checkbox" name="american" id="american" />
                                <label htmlFor="american">American</label>
                            </div>
                        </fieldset>
                    </div> */}
                </form>
                <div className="d2">
                    <div className="picture">
                        <img src="" alt="" />
                    </div>
                    <div className="submit">
                            <button type="button" className="btn btn-success submitForm">Submit</button>
                            <button className="btn btn-warning" onClick={()=>dispatch(showForm())}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDishe;