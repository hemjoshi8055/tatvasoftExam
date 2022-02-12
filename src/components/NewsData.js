import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import apiClient from "../Public/apiClient";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function NewsData(props) {
  const [newsData, setNewsData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modelContent, setModelContent] = useState("");

  const newsData2 = [];
  useEffect(() => {
    apiClient
      .get(
        "/v2/top-headlines?country=us&apiKey=7c94c4bf82af4e18a0ba534482945782"
      )
      .then((res) => {
        debugger;
        newsData2.push(res.articles);
        setNewsData(newsData2);
        setTimeout(() => {
          showNews();
        }, 2000);
      });

    return () => {};
  }, []);

  const showNewsData = (title, desc) => {
    setModalOpen(true);
    setModelContent(desc);
  };

  const closemodel = () => {
    setModalOpen(false);
  };

  const showNews = () => {
    // setTimeout(() => {
    return newsData[0].map((value) => {
      return (
        <Grid item xs={4}>
          <div
            style={{ display: "grid" }}
            onClick={() => showNewsData(value.title, value.description)}
          >
            <img className="imagehw" src={value.urlToImage} />
            <span>
              <b>{value.title}</b>
            </span>
            <p>{value.description}</p>
          </div>
        </Grid>
      );
    });
    // }, 2000);
  };

  return (
    <div style={{ padding: 50 }}>
      <Box sx={{ flexgrow: 1 }}>
        <Grid container spacing={2}>
          {showNews()}
        </Grid>
      </Box>

      <div className="modelstyle">
        <Modal open={modalOpen} onClose={closemodel}>
          <Box sx={style}>
            <Typography>{modelContent}</Typography>
            <Button onClick={closemodel}>Close</Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
