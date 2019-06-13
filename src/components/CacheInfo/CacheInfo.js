import React from "react";
import { Typography } from '@material-ui/core';

export default ({ cacheObject }) => (
  <>
    <Typography>Query Count: {cacheObject.queryCount}</Typography>
    <Typography>Cache Hits: {cacheObject.cacheHits}</Typography>
    <Typography>Current Cache:</Typography>
    <ul>
      {Object.keys(cacheObject.cache).map((cacheItem, i) => (
        <li>
          [key: {cacheItem}, value:{" "}
          {JSON.stringify(cacheObject.cache[cacheItem])}]
        </li>
      ))}
    </ul>
    <ul>
      {cacheObject.cacheHitsHistory.map((hit, i) => (
        <li>{`Hit ${i}: ${hit}`}</li>
      ))}
    </ul>
  </>
);
