const PreviewCard = () => {
  // Here is the preview of the journal entry. It reads the data out of the local storage, if there is any.

  // const [showPreview, setShowPreview] = useState(lsData);

  // useEffect(() => {
  //   if (localStorage.getItem("journalEntries")) {
  //     setShowPreview(true);
  //   }
  // }, []);

  const lsData = [
    {
      title: "Title of the first Entry",
      date: "First Date",
      text: "Text of Entry",
      img: "https://i.pinimg.com/736x/2a/11/93/2a1193dabddd7412fb06ddaf78b7f872.jpg",
    },
    {
      title: "Title of the second Entry",
      date: "Second Date",
      text: "Text of Entry",
      img: "https://i.pinimg.com/736x/2a/11/93/2a1193dabddd7412fb06ddaf78b7f872.jpg",
    },
    {
      title: "Title of the third Entry",
      date: "Third Date",
      text: "Text of Entry",
      img: "https://i.pinimg.com/736x/2a/11/93/2a1193dabddd7412fb06ddaf78b7f872.jpg",
    },
  ];

  return (
    <>
      {lsData.map((entry, index) => (
        <div className="previewCard" id="previewCard" key={index}>
          <div className="w-2/6">
            <img src={entry.img} alt="preview" className="previewImage" />
          </div>
          <div className="card-body w-4/6">
            <h2 className="card-title">{entry.date}</h2>
            <p>{entry.title}</p>
            <div className="card-actions justify-start">
              <button className="btn btn-outline">View full entry</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PreviewCard;
