let puppyImages = [
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dpuppy&psig=AOvVaw2lhUrTaVQ8HV_xpItaPe77&ust=1724972147403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjHuZLkmIgDFQAAAAAdAAAAABAE",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpuppy&psig=AOvVaw2lhUrTaVQ8HV_xpItaPe77&ust=1724972147403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjHuZLkmIgDFQAAAAAdAAAAABAJ",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fpuppy%2F&psig=AOvVaw2lhUrTaVQ8HV_xpItaPe77&ust=1724972147403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjHuZLkmIgDFQAAAAAdAAAAABAQ",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.four-paws.org%2Four-stories%2Fpublications-guides%2F10-tips-to-recognise-a-responsible-puppy-seller&psig=AOvVaw2lhUrTaVQ8HV_xpItaPe77&ust=1724972147403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjHuZLkmIgDFQAAAAAdAAAAABAY",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fpuppy%2F&psig=AOvVaw2lhUrTaVQ8HV_xpItaPe77&ust=1724972147403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjHuZLkmIgDFQAAAAAdAAAAABAg",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dpuppy&psig=AOvVaw2lhUrTaVQ8HV_xpItaPe77&ust=1724972147403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjHuZLkmIgDFQAAAAAdAAAAABAo",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fpuppy%2F&psig=AOvVaw3qJ4lr5vhu6n9s1dhVrrP-&ust=1724972219547000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJj__LTkmIgDFQAAAAAdAAAAABAE",
];

const imgs = document.getElementsByTagName("img");

for (image of imgs) {
  const index = Math.floor(Math.random() * puppyImages.length);
  image.src = puppyImages[index];
}
