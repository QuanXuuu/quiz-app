const showHomepage = () => {
  const home = document.querySelector('#homepage');
  home.classList.remove('hidden');
  const bookmark = document.querySelector('#bookmarks-page');
  const create = document.querySelector('#create-page');
  const profile = document.querySelector('#profile-page');
  bookmark.classList.add('hidden');
  create.classList.add('hidden');
  profile.classList.add('hidden');
};

const showBookMarksPage = () => {
  const bookmark = document.querySelector('#bookmarks-page');
  bookmark.classList.remove('hidden');
  const home = document.querySelector('#homepage');
  const create = document.querySelector('#create-page');
  const profile = document.querySelector('#profile-page');
  home.classList.add('hidden');
  create.classList.add('hidden');
  profile.classList.add('hidden');
};

const showCreatePage = () => {
  const create = document.querySelector('#create-page');
  create.classList.remove('hidden');
  const home = document.querySelector('#homepage');
  const bookmark = document.querySelector('#bookmarks-page');
  const profile = document.querySelector('#profile-page');
  home.classList.add('hidden');
  bookmark.classList.add('hidden');
  profile.classList.add('hidden');
};

const showProfilePage = () => {
  const profile = document.querySelector('#profile-page');
  profile.classList.remove('hidden');
  const home = document.querySelector('#homepage');
  const bookmark = document.querySelector('#bookmarks-page');
  const create = document.querySelector('#create-page');
  home.classList.add('hidden');
  bookmark.classList.add('hidden');
  create.classList.add('hidden');
};

export const buildNav = () => {
  const homeNav = document.querySelector('[data-nav="homepage"]');
  homeNav.addEventListener('click', showHomepage);

  const bookmarksNav = document.querySelector('[data-nav="bookmarks"]');
  bookmarksNav.addEventListener('click', showBookMarksPage);

  const createNav = document.querySelector('[data-nav="create"]');
  createNav.addEventListener('click', showCreatePage);

  const profileNav = document.querySelector('[data-nav="profile"]');
  profileNav.addEventListener('click', showProfilePage);
};
