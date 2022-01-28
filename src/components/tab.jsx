//sacando de las propiedas data 
const Tab = ({data, tabClicked}) =>{

    return(
        //recibe como parametro la data 
        <div style={{height: '100px', border:'1px solid black', display: 'inline-block'}} onClick={e => tabClicked(data)}>
            <h1>{data.title}</h1>
        </div>
    )
}

export default Tab;
//</div>