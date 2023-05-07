import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div >
            <div className="love">
            <h1 className="titel-love">With Love from Seoul</h1>
            </div>
            
            <div className="menuCategory" key='{category}'>
            {['All','Cleanser', 'Moisturizer','Masks&Pads'].map(
                category => <Filter category={category}/>
            )}
            </div>
            
            
        </div>
    )
}
export default AllCategories;