const codeDisplay = document.getElementById('code-display');
const pageDropdown = document.getElementById('page-dropdown');

const longCodePages = {
  page1: `Morbi ultricies, orci in tincidunt sodales, sapien nisl viverra purus, nec auctor ante eros eu elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras cursus consequat lacus, vitae congue massa vestibulum sed. Sed pulvinar felis posuere, viverra diam non, tempor arcu. Sed magna ex, condimentum et enim at, tincidunt suscipit neque. Nulla quis hendrerit velit. Etiam arcu augue, consectetur et elementum in, fringilla non nulla. Proin consectetur enim et eros accumsan facilisis. Cras arcu libero, consequat a sem id, tincidunt mollis massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in nunc bibendum, scelerisque urna bibendum, semper risus. Morbi dui est, malesuada ac pharetra ac, ornare et urna. Pellentesque congue sapien in nulla consectetur blandit. Donec a consectetur quam.`,
  page2: `Suspendisse at interdum quam. Duis quis porta lectus. Curabitur ullamcorper turpis eget dignissim semper. Pellentesque vestibulum consectetur efficitur. Nunc ac dictum nunc. Etiam auctor vel diam varius congue. Nunc nec rutrum lorem. Vestibulum efficitur, elit a pretium dictum, enim nulla maximus metus, in tempus odio magna quis sapien. Fusce sit amet maximus nisl. Maecenas ligula ipsum, efficitur dictum eros nec, eleifend iaculis massa. Phasellus gravida dictum felis. Nulla id tortor id arcu venenatis maximus vel a enim. Morbi luctus nisi enim, et gravida est varius vitae. Proin tortor neque, porta eget turpis id, rutrum aliquam elit.`,
  page3: `In auctor suscipit iaculis. Proin luctus aliquet orci lacinia rutrum. Quisque erat tellus, imperdiet lobortis faucibus nec, malesuada non ligula. Aliquam mi elit, posuere cursus vestibulum eu, pulvinar vitae nibh. Nulla semper rutrum mi eget vehicula. Phasellus non libero quis lectus tristique tempor feugiat laoreet velit. Nulla nec ex vitae nulla pulvinar pharetra quis et elit. Ut ligula orci, rutrum et dolor a, feugiat sagittis erat. Proin efficitur in libero ac ullamcorper. Vivamus massa nulla, laoreet ut blandit vel, vehicula quis neque. Morbi mollis rhoncus feugiat. In hac habitasse platea dictumst. Donec et tortor sit amet dolor ultrices sagittis.`,
  page4: `Cras gravida consectetur gravida. Integer quis turpis leo. Integer non felis arcu. Sed maximus mattis dictum. Integer molestie nibh eu neque finibus vulputate. Duis vitae purus vel urna sollicitudin lacinia ut et augue. Proin pellentesque leo tellus, a volutpat erat auctor in. Sed laoreet mauris sed interdum sodales.`,
  page5: `Aliquam mollis leo justo, sit amet gravida ex finibus nec. Maecenas tempus rutrum velit, at suscipit felis congue a. Nulla sodales ex ac nibh tincidunt, nec mattis justo dapibus. Integer pharetra pulvinar metus eu egestas. Duis ut cursus diam. Donec vehicula purus sit amet arcu vulputate ultrices. Praesent vitae leo quam. Nulla fringilla aliquam nisl, a mollis neque porta eget. Sed dapibus sodales mi, vitae pretium tellus luctus ac. Etiam sagittis, sem tristique faucibus aliquam, nibh lectus elementum leo, faucibus laoreet arcu ex ac urna. Donec eu tellus purus. Pellentesque a nulla at nulla malesuada auctor. Nulla ac laoreet orci. Nam velit velit, feugiat et volutpat non, rutrum in elit. Morbi velit turpis, bibendum id risus sit amet, faucibus consequat odio. Fusce id malesuada enim.`,
  page6: `Suspendisse vehicula ligula in tempus aliquam. Nulla a ipsum lorem. Donec porttitor eros quis lobortis feugiat. Morbi sit amet nibh lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec fermentum neque sed sem mattis gravida. Morbi feugiat rhoncus rutrum. Phasellus iaculis tempus condimentum. Praesent luctus commodo risus, ut imperdiet eros sodales id. Nam lacinia nulla nec lorem placerat pretium. Praesent ultrices, leo vitae sagittis consectetur, felis dui egestas urna, at mattis tortor tellus at turpis.`,
  page7: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vehicula, purus eu bibendum pretium, elit lectus hendrerit erat, a aliquam nibh felis eu elit. Curabitur rutrum erat ut ante dapibus auctor. Integer pellentesque dui sit amet est condimentum aliquam. Suspendisse varius orci nisi, ac lacinia nunc vehicula bibendum. Nullam eu porta sapien. Integer efficitur purus at mauris scelerisque lacinia. Praesent id nisl suscipit, mattis sem eget, pellentesque nulla. Phasellus id varius diam. Donec quis fringilla nisi. Cras lectus massa, semper eget sem eu, egestas molestie lectus. Aliquam erat volutpat. Curabitur convallis quam in augue eleifend, nec varius odio aliquet. Integer libero metus, aliquet at erat a, blandit pretium dolor. Suspendisse molestie eros ut ullamcorper laoreet.`
};

pageDropdown.addEventListener('change', () => {
  const selectedPage = pageDropdown.value;
  codeDisplay.textContent = longCodePages[selectedPage] || longCodePages.page1;
});

//===============================================

const button = document.querySelector('.change-image');
const container = document.body;
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff9900', '#9900ff'];

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Random properties
    const size = Math.random() * 10 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * window.innerWidth;
    const rotation = Math.random() * 360;
    
    // Set styles
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = color;
    confetti.style.left = `${left}px`;
    confetti.style.top = `-10px`;
    confetti.style.transform = `rotate(${rotation}deg)`;
    confetti.style.position = 'absolute';
    
    // Animation
    const duration = Math.random() * 3000 + 2000;
    const animationX = (Math.random() - 0.5) * 200;
    
    confetti.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
    confetti.style.opacity = '1';
    
    document.body.appendChild(confetti);
    
    // Trigger animation
    setTimeout(() => {
        confetti.style.transform = `translate(${animationX}px, ${window.innerHeight}px) rotate(${rotation + 360}deg)`;
        confetti.style.opacity = '0';
    }, 10);
    
    // Remove after animation
    setTimeout(() => {
        confetti.remove();
    }, duration + 10);
}

button.addEventListener('click', () => {
    // Create multiple confetti pieces
    for (let i = 0; i < 100; i++) {
        setTimeout(createConfetti, Math.random() * 500);
    }
    
    // Add shake effect to image
    const image = document.querySelector('#display-image');
    image.classList.add('shake');
    setTimeout(() => {
        image.classList.remove('shake');
    }, 500);
})

