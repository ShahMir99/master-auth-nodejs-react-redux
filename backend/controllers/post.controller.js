const getPosts = (req, res) => {
    try {
      res.status(200).send("Get post route");
    } catch (error) {
      console.log("Error in getPost", error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export default {
    getPosts,
  };
  