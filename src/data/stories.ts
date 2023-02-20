export type Stories = {
  name: string;
  author: string;
  summary: string;
  story: string;
  createdDate: number;
  updatedDate: number;
  imageSrc: string;
};

export const stories: Stories[] = [
  {
    name: "Buttercup and Suma",
    author: "Sanaya Sayem",
    summary: "A story about a super powerful Unicorn and a Kind helping girl",
    story:
      "Once upon a time, there was a very powerful Unicorn SUPER POWERFUL! And the Unicorn's name was Buttercup. The Unicorn lived on top of a cloud, where no one can see her. But Suma is super good. She is kind. She helps people and she also eats her foods! But she also believes in Unicorns, which is also good. So what Buttercup did, she gave Suma magic when she was sleeping. The magic was called Floating magic, so when Suma woke up, she was floating to Buttercup's cloud, and Buttercup said, Hello Suma, Suma said, 'OMG!' This is a dream come true! Are you for real? Buttercup said, Yes, I am real, I am your parent Suma, 'Oh, Thank you, thank you, thank you, I have no parents Suma said. Buttercup did whatever Suma asked for.",
    createdDate: new Date().getDate(),
    updatedDate: new Date().getDate(),
    imageSrc: "/story_one_image.jpeg",
  },
  {
    name: "A kitty and a Fox",
    author: "Sanaya Sayem",
    summary: "A story about a strong kitty escaping from a sly Fox",
    story:
      "Once upon a time, there was a very powerful Unicorn SUPER POWERFUL! And the Unicorn's name was Buttercup. The Unicorn lived on top of a cloud, where no one can see her. But Suma is super good. She is kind. She helps people and she also eats her foods! But she also believes in Unicorns, which is also good. So what Buttercup did, she gave Suma magic when she was sleeping. The magic was called Floating magic, so when Suma woke up, she was floating to Buttercup's cloud, and Buttercup said, Hello Suma, Suma said, 'OMG!' This is a dream come true! Are you for real? Buttercup said, Yes, I am real, I am your parent Suma, 'Oh, Thank you, thank you, thank you, I have no parents Suma said. Buttercup did whatever Suma asked for.",
    createdDate: new Date().getDate(),
    updatedDate: new Date().getDate(),
    imageSrc:
      "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/313b2703-709c-4e03-a8b3-530fb2e5d160",
  },
];
