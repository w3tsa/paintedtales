export type Stories = {
  name: string;
  author: string;
  summary: string;
  story: string;
  createdDate: string;
  updatedDate: string;
  imageSrc: string;
};

export const stories: Stories[] = [
  {
    name: "Buttercup and Suma",
    author: "Sanaya Sayem",
    summary: "A story about a super powerful Unicorn and a Kind helping girl",
    story:
      "Once upon a time, there was a very powerful Unicorn SUPER POWERFUL! And the Unicorn's name was Buttercup. The Unicorn lived on top of a cloud, where no one can see her. But Suma is super good. She is kind. She helps people and she also eats her foods! But she also believes in Unicorns, which is also good. So what Buttercup did, she gave Suma magic when she was sleeping. The magic was called Floating magic, so when Suma woke up, she was floating to Buttercup's cloud, and Buttercup said, Hello Suma, Suma said, 'OMG!' This is a dream come true! Are you for real? Buttercup said, Yes, I am real, I am your parent Suma, 'Oh, Thank you, thank you, thank you, I have no parents Suma said. Buttercup did whatever Suma asked for.",
    createdDate: new Date().toLocaleDateString(),
    updatedDate: new Date().toLocaleDateString(),
    imageSrc: "/story_one_image.jpeg",
  },
  {
    name: "A kitty and a Fox",
    author: "Sanaya Sayem",
    summary: "A story about a strong kitty ate a sly Fox",
    story:
      "Once upon a time there was a little kitty with a ald owner. The owner made a apple pie. The owner said to the kitty come here, I made some apple pie for you. The kitty loved apple pie. Then the kitty wanted to go outside. The owner said no kitty, it is too dangerous! But the owner walked away, the kitty sneaked passed and went outside. When the kitty went outside, she felt lonely. She wanted to listened to her owner, she wanted to go home. But then a hungry fox came out! The fox said to the kitty, are you lost little kitty? And the kitty said, I am lost. And the fox said you look good to eat. But the kitty ate his eye, and his head, and his back and everything and the kitty found her owner. ",
    createdDate: new Date().toLocaleDateString(),
    updatedDate: new Date().toLocaleDateString(),
    imageSrc:
      "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/313b2703-709c-4e03-a8b3-530fb2e5d160",
  },
];
