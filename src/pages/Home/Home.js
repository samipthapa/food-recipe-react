import React, { useEffect, useState, useContext, Suspense } from "react";
import profile from "../../assets/profile.png";
import "./Home.css";
import api from "../../utils/api";
import Button from "../../components/Button/ButtonComponent";
import Recipe from "../../components/Recipe/Recipe";
import { TokenContext } from "../../context/TokenContext";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import fallbackRender from "../../components/ErrorBoundary/ErrorBoundary";

// const Button = React.lazy(() => import("../../components/Button/ButtonComponent"));

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const { data, setData } = useContext(TokenContext);

    useEffect(() => {
        onSearch();
    }, []);

    const onSearch = (e) => {
        if (e) e.preventDefault();

        api.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
            .then(response => {
                setRecipes(response.data.meals);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="container-home">
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <h2 className="greeting">Hello {data.name.split(" ")[0]}</h2>
                    <p className="subheading">What are you cooking today?</p>
                </div>
                <img src={profile} alt="profile" className="profile" />
            </div>

            <form onSubmit={onSearch} >
                <label>
                    <input type="text" id="search-recipe"
                        value={search} onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search recipe"
                    />
                </label>
            </form>

            <div style={{ display: 'flex', overflow: 'scroll' }}>
                {
                    recipes.map((item, index) => {
                        return (
                            <Recipe
                                name={item.strMeal}
                                image={item.strMealThumb}
                            />
                        )
                    })
                }
            </div>

            <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    navigate('/');
                    setData({ token: "", name: "" });
                }}>
                <ErrorBoundary
                    FallbackComponent={fallbackRender}
                    onReset={() => { }}
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <Button text="Logout" />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div >
    )
};

export default Home;