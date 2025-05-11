
function MyView(){
    const name = prompt("What is your name? ");
    let color = prompt("what is your favourite color? ")
    return(
        <>
            <div className="bigdiv" style={{backgroundColor: color}}>
                <p>
                    Let us know more about you to make your website more customizable.
                </p>
                <p>
                    Do well to answer the questions that pop up, else reload the browser.
                </p>
                <h1>You are welcome {name}, we are really happy to see you</h1>
            </div>
        </>
    );
}

export default MyView;