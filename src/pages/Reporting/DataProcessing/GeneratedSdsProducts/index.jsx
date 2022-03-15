import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import Table from "@bach/components/Table";

import useStyles from "./style";

function IncomingSdpProducts(props) {
  const classes = useStyles();

  const { data, loading } = props;

  const columns = [
    {
      field: "id",
      headerName: "File Name",
      flex: 0,
      minWidth: 150,
    },
    {
      field: "files_produced",
      headerName: "Files Ingested",
      flex: 0,
      minWidth: 170,
    },
    {
      field: "volume",
      headerName: "Volume (Bytes)",
      flex: 0,
      minWidth: 180,
      valueFormatter: (params) => {
        return `${String(params.value)}`;
      },
    },
  ];

  return (
    <Grid item xs={12} className={classes.reportTable}>
      <Table data={data} columns={columns} loading={loading} />
    </Grid>
  );
}

IncomingSdpProducts.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape),
};

IncomingSdpProducts.defaultProps = {
  data: [],
};

export default withRouter(IncomingSdpProducts);
