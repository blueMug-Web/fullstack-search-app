import Link from 'next/link';
import { ISearchData } from '../../../lib/search/types';

//Anything prefixed with I, (ie. ISearchData), is an interface
//https://www.typescriptlang.org/docs/handbook/interfaces.html

//Search result component is a union between the type of
//search result data it receives as props, and any components props you can put on an HTML div
export type ISearchResult = ISearchData & React.ComponentPropsWithoutRef<'div'>;

const SearchResult: React.FC<ISearchResult> = ({
  url,
  title,
  text,
  className,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className={`flex flex-col w-5/6 max-w-screen-md space-y-1 ${className} `}
    >
      <Link href={url}>
        <a
          className="cursor:pointer hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{url}</p>
          <p className="text-blue-600 text-xl ">{title}</p>
        </a>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default SearchResult;
