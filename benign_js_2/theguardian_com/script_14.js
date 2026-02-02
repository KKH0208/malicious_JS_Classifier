/* 元のURL: https://theguardian.com */
document.addEventListener('DOMContentLoaded', function () {

					/** The checkbox input element used to toggle the navigation menu. */
					const navInputCheckbox = document.getElementById('header-nav-input-checkbox');

					/** The veggie burger button element used to open/close the menu. */
					const veggieBurger = document.getElementById('header-veggie-burger');

					/** List of menu items that should be selectable when the menu is open. */
					const expandedMenuClickableTags = document.querySelectorAll(
						'.selectableMenuItem',
					);

					/** The root element of the expanded menu. */
					const expandedMenu = document.getElementById('header-expanded-menu-root');

					/** The label for the first column in the menu, assumed to be "News".*/
					const firstColLabel = document.getElementById('News-button');

					/** The link element in the second list item under news links. */
					const firstColLink = document.querySelector(
						'#newsLinks > li:nth-of-type(2) > a',
					);

					/**
					 * Focuses on the first navigation element depending on whether the first column label is visible.
					 *
					 * If the first column label is not visible, the function focuses on the first link element.
					 * Otherwise, it focuses on the first column label.
					 */
					const focusOnFirstNavElement = () => {
						if (window.getComputedStyle(firstColLabel).display === 'none') {
							firstColLink.focus();
						} else {
							firstColLabel.focus();
						}
					};

					/**
					 * Updates ARIA attributes and tabindex values based on whether the menu is open or closed.
					 */
					const updateAttributesForMenu = (isOpen) => {
						firstColLabel.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
						veggieBurger.setAttribute(
							'data-link-name',
							isOpen
								? 'header : veggie-burger : hide'
								: 'header : veggie-burger : show',
						);
						expandedMenuClickableTags.forEach((tag) => {
							tag.setAttribute('tabindex', isOpen ? '0' : '-1');
						});
					};

					/** Toggles the navigation menu by simulating a click on the checkbox. */
					const toggleMainMenu = () => {
						if (navInputCheckbox) {
							navInputCheckbox.click();
						}
					};

					/**
					 * Handles keydown events to toggle the menu when the Enter or Space key is pressed.
					 */
					const keydownToggleMainMenu = (e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							toggleMainMenu();
						}
					};
					/**
					 * Handles click events to manage the state of the navigation menu.
					 *
					 * - Toggles the menu open/close state when the menu button (veggieBurger) is clicked.
					 */
						const handleMenuClick = (e) => {
							const menuButtonClicked = navInputCheckbox === e.target;
							const clickInsideMenu = expandedMenu.contains(e.target);
							const menuIsOpen = navInputCheckbox.checked
							if (menuButtonClicked && !menuIsOpen) {
						    document.body.classList.toggle('nav-is-open')

							firstColLabel.setAttribute('aria-expanded', 'false')
                            veggieBurger.setAttribute('data-link-name','header : veggie-burger : show')
                            expandedMenuClickableTags.forEach(function($selectableElement){
                                $selectableElement.setAttribute('tabindex','-1')
                            })
                          } else if (menuButtonClicked && menuIsOpen) {
						    document.body.classList.toggle('nav-is-open')
							firstColLabel.setAttribute('aria-expanded', 'true')
                            veggieBurger.setAttribute('data-link-name','header : veggie-burger : hide')
                            expandedMenuClickableTags.forEach(function($selectableElement){
                                $selectableElement.setAttribute('tabindex','0')
                            })
                            focusOnFirstNavElement()
							}
						};

					/** Adds event listeners to manage the navigation menu. */
					if (navInputCheckbox) {
						navInputCheckbox.addEventListener('click', handleMenuClick);
						veggieBurger.addEventListener('keydown', keydownToggleMainMenu);
						document.addEventListener('keydown', (e) => {
							if (e.key === 'Escape' && navInputCheckbox.checked) {
								toggleMainMenu();
								veggieBurger.focus();
							}
						});
					/**
					 * Handles mouse down events to manage the state of the navigation menu.
					 *
					 * - Closes the menu if the click occurs outside both the menu button and the expanded menu.
					 */
					document.addEventListener('mousedown', function(e){
						if(navInputCheckbox.checked && !expandedMenu.contains(e.target) && !veggieBurger.contains(e.target)){
						toggleMainMenu()
							}
						});
					}
				});

