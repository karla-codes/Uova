const spaceId = "18likolg0itb";
const envId = "master";
const accessToken = "xp4Y38h1XIxf-QVKhj2-utnqWLFZbBP21W2tunNdcCQ";

const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${envId}/entries?access_token=${accessToken}`;

const articleTag = document.querySelector(".grid");

const grabData = () => {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      // turn our contentful data into something more useful
      return data.items.map(item => {
        return item.fields;
      });
    });
};

// grab run function on load
grabData().then(data => {
  // do something
  console.log(data);

  articleTag.innerHTML = ``;

  data.forEach(item => {
    articleTag.innerHTML =
      articleTag.innerHTML +
      `
      <div class="item">
      <img src="${item.image}" alt="">
      <div class="title">
        <h2>${item.title}</h2>
        <p>${item.price}</p>
      </div>
      <p>${item.description}</p>
    </div>`;
  });
});
