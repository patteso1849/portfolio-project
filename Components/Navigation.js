function linkBuilder(links){
    // const linkHTML = links.map(function linkLister(link){
    //     return `<li>${link}</li>`;
    // });

    // return linkHTML.join(' ');
    return links
        .map(function linkLister(link){
            return `<li><a href="/${link.toLowerCase()}" data-navigo>${link}</a></li>`;
        })
        .join(' ');
}


export default function(state){
    return `
<nav>
    <ul>
        ${linkBuilder(state.links.primary)}
      <li class="dropdown">
        Portfolio
        <ul>
          ${linkBuilder(state.links.dropdown)}
        </ul>
      </li>
    </ul>
  </nav>
`;
}

