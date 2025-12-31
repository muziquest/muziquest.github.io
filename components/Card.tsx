export interface ReleaseGroup {
  id: string;
  artist: string;
  title: string;
  rating: number;
  tags: string[];
}

interface Props {
  item: ReleaseGroup;
  setSelected: (item: ReleaseGroup | null) => void;
}

export default function Card({ item, setSelected }: Props) {
  return (
    <div className="hover-3d px-1" onClick={() => setSelected(item)}>
      <figure className="w-30 lg:w-50 rounded-2xl shadow-sm">
        <img
          src={`https://coverartarchive.org/release-group/${item.id}/front`}
          alt={`${item.artist} - ${item.title}`}
        />
      </figure>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
