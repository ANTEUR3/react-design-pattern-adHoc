export const fields = [
  { label: "UserName", type: "input" },
  { label: "Email", type: "input" },
  {
    label: "Country",
    type: "select",
    options: ["Algeria", "Moroco", "Tunisia", "Egypt"],
  },
  {
    label: "Age",
    type: "select",
    options: ["18-23", "24-30", "31-35", ">35"],
  },
  //   {
  //   label: "Bio",
  //   type: "textArea",
  //   placeholder: "Write your bio here...",
  // },
  //   {
  //   label: "Description",
  //   type: "textArea",
  //   placeholder: "Write your description here...",
  // },
  //   {
  //   label: "I agree to the Terms & Conditions",
  //   type: "checkbox",
  // },
  // {
  //   label: "Subscribe to newsletter",
  //   type: "checkbox",
  // },
];

export const contextData = {
  inputs: [
    { label: "UserName", type: "input" },
    { label: "Email", type: "input" },
  ],
  selects: [
    {
      label: "Country",
      type: "select",
      options: ["Algeria", "Moroco", "Tunisia", "Egypt"],
    },
    {
      label: "Age",
      type: "select",
      options: ["18-23", "24-30", "31-35", ">35"],
    },
  ],
  checkboxes: [
    {
      label: "Accept terms and conditions",
    },
    {
      label: "I'm not robot",
    },
  ],
  textArea: [
    {
      placeholder: "Enter you bio",
      label: "Bio",
    },
    {
      placeholder: "Enter you programming experiences",
      label: "Experiences",
    },
  ],
};
