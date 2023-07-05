import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil
        quasi labore sapiente rem, porro, dolores distinctio aliquid unde
        laboriosam iusto quos et error odio, molestias repellat quo corrupti
        sit.
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe
        cum consequuntur reiciendis totam modi eaque natus? Illum, natus
        blanditiis similique voluptates atque possimus exercitationem officiis
        autem debitis minus repellendus.
      </Typography>
    </div>
  );
};

export default MuiTypography;
