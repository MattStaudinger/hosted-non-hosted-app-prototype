const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 some city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    address: "Some address 10, 67890 some city",
    description: "This is a second meetup",
  },
];

// this needs to be refactored to the dynamic data of DUMMY_MEETUPS
// depending on which item was selected
const meetupItemData = {
  image:
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
  title: "A First meetup",
  address: "Some address",
  description: "The meetup description",
};

export { DUMMY_MEETUPS, meetupItemData };
