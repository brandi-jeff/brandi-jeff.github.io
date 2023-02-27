const darkThemeIcon = document.getElementById("dark_theme");
const lightThemeIcon = document.getElementById("light_theme");
const pgColorTheme = document.getElementById("pg_color_theme");
const buttonWords = documentElement.getElementById("tooltip-default");

pgColorTheme.style.backgroundImage = "url('./photos/dark_bitmoji.svg');"
// Always set dark theme by default
document.documentElement.classList.add('dark');
localStorage.setItem('color-theme', 'dark');
darkThemeIcon.classList.add('hidden');

pgColorTheme.addEventListener("click", (e) => {
    debugger
        e.preventDefault();
        
        console.log("Does this work?");
        // toggle icons inside button
        // darkThemeIcon.classList.toggle('hidden');
        // lightThemeIcon.classList.toggle('hidden');
    
        // // if set via local storage previously
        // if (localStorage.getItem('color-theme')) {
        //     if (localStorage.getItem('color-theme') === 'light') {
        //         document.documentElement.classList.add('dark');
        //         localStorage.setItem('color-theme', 'dark');
        //     } else {
        //         document.documentElement.classList.remove('dark');
        //         localStorage.setItem('color-theme', 'light');
        //     }
    
        // // if NOT set via local storage previously
        // } else {
        //     if (document.documentElement.classList.contains('dark')) {
        //         document.documentElement.classList.remove('dark');
        //         localStorage.setItem('color-theme', 'light');
        //     } else {
        //         document.documentElement.classList.add('dark');
        //         localStorage.setItem('color-theme', 'dark');
        //     }
        // }
        buttonWords.innerHTML = "Too bright?"; 
});


