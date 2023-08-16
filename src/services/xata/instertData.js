// Generated with CLI
import { getXataClient } from "./xata";
const xata = getXataClient();

export const newLink = async ({
  url,
  name,
  image,
  description,
  site_description,
  color,
  domain_id,
  clicks,
  popularity_rating,
}) => {
  const record = await xata.db.links.create({
    url, // "longer text",
    name, // "longer text",
    image, // "longer text",
    description, // "longer text",
    site_description, // "longer text",
    color, // "longer text",
    domain_id, // "rec_xyz",
    clicks, // 3,
    popularity_rating, // 2.5,
  });
  console.log(record);
};
