import type { GenericEntry } from "@/types";

// Sort by date
export const sortByDate = (entries: GenericEntry[]): GenericEntry[] => {
  const sortedEntries = entries.sort(
    (a: any, b: any) =>
      new Date(b.data.date && b.data.date).valueOf() -
      new Date(a.data.date && a.data.date).valueOf(),
  );
  return sortedEntries;
};

// Sort by title
export const sortByTitle = (entries: GenericEntry[]): GenericEntry[] => {
  const sortedEntries = entries.sort((a: any, b: any) =>
    a.data.title.localeCompare(b.data.title),
  );
  return sortedEntries;
};

// Sort by title
export const sortByPubDate = (entries: GenericEntry[]): GenericEntry[] => {
  console.log(`--------------------`);
  console.log(`entries >>  ${entries.map((x) => x.data.title)}`);

  const sortedEntries = entries.sort((a: any, b: any) => {
    console.log(`a.data.title >> ${a.data.title}`);
    console.log(`a.data.pubDate >> ${a.data.pubDate}`);

    console.log(`b.data.title >> ${b.data.title}`);
    console.log(`b.data.pubDate >> ${b.data.pubDate}`);
    const result =
      new Date(b.data.pubDate && b.data.pubDate).valueOf() -
      new Date(a.data.pubDate && a.data.pubDate).valueOf();

    console.log(`result >> ${result}`);
    return result;
  });

  console.log(`entries >>  ${entries.map((x) => x.data.title)}`);
  console.log(`sortedEntries >>  ${sortedEntries.map((x) => x.data.title)}`);
  return sortedEntries;
};

// Sort by random
export const sortByRandom = (entries: GenericEntry[]): GenericEntry[] => {
  const sortedEntries = entries.sort(() => Math.random() - 0.5);
  return sortedEntries;
};
