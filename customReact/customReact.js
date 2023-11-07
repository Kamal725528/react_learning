function customRender(reactElement, maincontainer){

   /* const element=document.createElement(reactElement.tag);
    element.innerHTML=reactElement.children;
    element.setAttribute('href',reactElement.props.href);
    element.setAttribute('target',reactElement.props.target);
    maincontainer.appendChild(element);  */

    // --------------------or-------------

    const domelement=document.createElement(reactElement.tag);
    domelement.innerHTML=reactElement.children;
    for(prop in reactElement.props){
        if(prop==='children')continue;
        domelement.setAttribute(prop, reactElement.props[prop]);
    }
    maincontainer.appendChild(domelement);

}

const reactElement={
    tag:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:'click me to visit google'
}


const maincontainer=document.getElementById('root');

customRender(reactElement, maincontainer);