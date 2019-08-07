function linkBuilder(links){
    // const linkHTML = links.map(function linkLister(link){
    //     return `<li>${link}</li>`;
    // });

    // return linkHTML.join(' ');
    return links
        .map(function linkLister(link){
            /**
            * An HTML data attribute provides additional information that can be used by JS as a hook.
            * In this case, 'navigo' is somethign that navigo uses to bind the link 'text' to the   Navigo router.
         */
            return `<li><a href="/${link.toLowerCase()}" data-navigo>${link}</a></li>`;
        })
        .join(' ');
}

export default (state) => `
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

