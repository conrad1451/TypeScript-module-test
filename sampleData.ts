type WordFrequencies = {
  text: string;
  value: number;
};

exports.getTheData = async function () {
  let myData: WordFrequencies[] = [
    {
      text: "test1",
      value: 640,
    },
    {
      text: "test2",
      value: 20,
    },
    {
      text: "test3",
      value: 16,
    },
    {
      text: "test4",
      value: 170,
    },
    {
      text: "test5",
      value: 10,
    },
    {
      text: "test6",
      value: 540,
    },
    {
      text: "test7",
      value: 12,
    },
    {
      text: "test8",
      value: 777,
    },
    {
      text: "test9",
      value: 450,
    },
    {
      text: "test10",
      value: 19,
    },
  ];

  return myData;
};
