const codeDisplay = document.getElementById('code-display');
const pageDropdown = document.getElementById('page-dropdown');

const longCodePages = {
  page1: `Medea is a princess and an enchantress from Colchis, the daughter of King Aeëtes. She once was married to Jason but he betrayed her, leading to the awful decision of hers to kill her sons. She was overwhelmed with emotions and controlled with rage. After her murder she went to Athens and left her husband Jason in despair. This is not the only thing she has done, she also killed her brother just for her and Jason to escape. With all what happened she felt every possible pain mentally and emotionally. To add, Medea is also the granddaughter of the God Helios, the God of Sun who dashes through the sky with his Golden chariot pulled by four fiery pegasus. Medea rode this chariot to take her sons and leave Jason. To conclude, Medea was an enchantress that was of divine descent with a sad prophecy, she used her powers to tell Jason what he must do, but he used her for his own benefit.
`,
  page2: `The tragic journey of the character leading to her action is her betrayal on her family with a man whom she thought she could trust. After cheating and mistreating Medea, she came up with a plan to kill the ones her husband loves but not him. This action won't kill him but rather make him go mad. Medea exiled and alone, plotted a revenge, this led to her killing her husbands’ lover and father-in-law, but she did not feel satisfied with her revenge, she was once loving and faithful to her husband but he broke her trust. A messenger arrived telling her she was successful, she did not feel satisfied and plotted to kill her own sons. She did all this to get revenge, all the hatred pent up on her heart fueled her actions. In the end, she was content with what she had done to her life just to get revenge. The plot did not give the character an enlightenment but rather a sad realization that she cannot be what she once was.
`,
  page3: `Medea, who is an enchantress, is easily overwhelmed with her rage and hate. She is strategic and wise, not killing her target but slowly tricking them without even being close. She was motivated to do her terrible actions of killing her own sons because she wanted her husband to suffer the way she did, alive but dying inside. In the values Medea showed in the story, it is persistence as she made her husband suffer until she knows he has nothing left but a tragic life he dug himself into. What makes Medea's character tragic is how willing she was to give up what she had for her husband, Jason. One of these being the life of her own brother, yet still, Medea is almost immediately replaced, as if she was nothing. In a spit of revenge, Medea ends up murdering Glauce, the other woman, along the king, Glauces father. Not satisfied by this and feeling that she needed to hurt Jason even more, she goes and crosses the line of insanity even more, by killing her sons, which was ironic, in which her belief system had her thinking they would be mistreated by the people of Corinth, yet in the end, they still suffer by the hands of their mother.
`,
  page4: `The characters action represents manipulation, karma, formidable rage, and revenge. This is shown not only by Medea but also her husband Jason, sons, and the King Creon. Medea doesn't kill Jason, in hopes he drowns in sorrow of grief and is haunted by the suffering that her actions will have had caused. She reminds him of his cowardness, how horrible of a man he is, and how words could not start to describe the spite she felt for the man she used to ever so love. In the end they go their separate paths, Medea escapes, leaving Jason with the grief, devastation, and shame of what could have been. A pot of emotion stirred in different ways, expressed in different perspectives. Grief for Jason is his loss for love, Grief for Medea is not for her but rather for what she has done. It is ironic how cowardly Jason looked when Medea took everything from him just how cowardly Medea looked by letting her emotions kill her own family. Medeas' story does not just show her emotion but also the other characters emotions, this is what makes the tragic story of Medea sad and confusing because you will pity her by the start but fear her actions in the end.
`,
  page5: `Medea:
I am not willing to kill,
But with the rage you've given me, I am able to.
Medea:
Thousands of experience,
Broken with one journey.
`,
  page6: `Visually, this story is bright, but the story is far from the light side of the hue. The story Medea shows us a dark story from the very start. She wanted love, she felt betrayed, she did what she felt was right. In different ways, the play shows us a dark hue of red and blue, showing what emotions were dominant in Medea. From a great eye-catcher of colors, as the end arrives and Medea plots her revenge, the story as well as its themes got darker. Medea killed, manipulated, and made fun of the people she thought was bringing her this sad reality. Exiled, she felt rage. At the end of the story as Medea rides the Golden chariot, the theme got brighter since Medea has felt her enlightenment, but this was rather the feeling of freedom from what she was experiencing in the times she felt the most betrayed and played.
  `,
  page7: `Medea’s hamartia is her being emotionally extreme, especially her inability to contain herself from revenge. This flaw drives her to commit those terrible actions including the murder of her own children in order to punish Jason for his betrayal. Though she is intellectually sharp and powerful, her destructive impulse leads to this tragic tragedy, fulfilling the pattern of downfall through a fatal error or simply Hamartia.
`,
  page8: `The tragic flaw of hubris represented by Medea is extreme pride and disobedience of both divine and human laws. Medea will not take the humiliation quietly after Jason’s treachery by deciding to marry someone else. Instead of making fair or reasonable decision, she is sure that she has the right to be the judge and the executioner. In a way, her pride is joy that comes from her brain and cunning which leads her to a monstrous act of killing her own children—going beyond the imaginable. Medea convinces herself that through this axt, she will not only be able to recover her honor but also be the absolute master of Jason. Although the character is allowed no physical punishment, her hubris alienates her from humanity and breaks the natural bonds of motherhood, as it is clearly demonstrated, how pride can be the cause of moral and emotional destruction.
`,
  page9: `Medea’s story evokes catharsis by giving intense pity and fear in the audience pity for her deep suffering and betrayal, and fear because of the action she did, which is the revenngee. As she murders her children to hurt Jason emotionally, the readers are forced to encounter the darkest extremes of human emotion. Her pain is understandable, but her choices are tragic creating a powerful emotional release or Catharsis's Release of Tension. Ultimately, the audience is left shaken having witnessed the full weight of human emotion justice, and loss.
`
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

