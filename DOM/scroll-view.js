function isElementVisible(container, el){
    if(!(container && el)) return false;

    // Wrapper bounds
    const wTop = container.scrollTop,
          wBot = wTop + container.clientHeight;

    // Element bounds
    const elTop = el.offsetTop,
          elBot = elTop + el.clientHeight;

    return (elTop >= wTop) && (elBot <= wBot);
}

function scrollIntoView(container, el){
    if(!(container && el)) return;

    // Wrapper bounds
    const wTop = container.scrollTop,
          wBot = wTop + container.clientHeight;

    // Element bounds
    const elTop = el.offsetTop,
          elBot = elTop + el.clientHeight;
    
    if(elTop < wTop){
        container.scrollTop -= (wTop - elTop);
    }
    else if(elBot > wBot){
        container.scrollTop += (elBot - wBot);
    }
}