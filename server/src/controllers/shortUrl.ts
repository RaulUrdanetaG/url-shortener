import express from "express";
import { urlModel } from "../models/shortUrl";

export const createUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { fullUrl } = req.body;
    const urlFound = await urlModel.find({ fullUrl: fullUrl });
    if (urlFound.length > 0) return res.status(409).send(urlFound);

    const shortUrl = await urlModel.create({ fullUrl });

    return res.status(200).send(shortUrl);
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

export const getAllUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const shortUrl = await urlModel.find({});
    if (shortUrl.length < 0)
      return res.status(404).send({ message: "No urls found" });

    return res.status(200).send(shortUrl);
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

export const getUrl = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const shortUrl = await urlModel.findOne({ shortUrl: id });
    if (!shortUrl) return res.status(404).send({ message: "No url found" });

    shortUrl.clicks++;
    shortUrl.save();

    return res.redirect(`${shortUrl.fullUrl}`);
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

export const deleteUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const shortUrl = await urlModel.findByIdAndDelete({ _id: id });

    if (shortUrl)
      return res.status(200).send({ message: "Url successfully deleted" });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};
