import React from "react";
const Search=()=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <>
        <div className="">
            
           <form action="" onSubmit={handleSubmit}>
               <div className=" position-relative search_width mx-auto py-1">
              <input type="text" className="w-100 search_box shadow-lg" placeholder="Search...." style={
                   {
                   borderRadius:"40px",
                   caretColor:" black",
                   outline:"0px",
                   padding:"15px 70px 15px 20px", 
                   color:"black",
                   fontSize:"20px",
                   backgroundColor:"white",
                   border:"none"
                }
              }/>
              <button type="submit " className="main_search shadow-lg">
              <i className="fas fa-search "></i>
               </button>
               </div>
          </form>  
          <div className="row">
                <h2 className="text-center fw-bold text-muted">The room has to be Comfortable<br/> The house has to look Habitable !!!</h2>
            </div>
          </div>
      </>
    )
}
export default Search;