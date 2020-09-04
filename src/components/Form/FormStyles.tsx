import { Theme, makeStyles } from "@material-ui/core/styles";

export const classesCommon = makeStyles((theme: Theme) => ({
  root: { width: "100%" },
  inputRoot: {
    marginTop: "2rem",
  },
}));
export const classesMobile = makeStyles((theme: Theme) => ({
  root: {},
}));
