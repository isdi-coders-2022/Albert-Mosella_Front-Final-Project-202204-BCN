interface Props {
  text: string;
  action: any;
}

const FilterButton = ({ action, text }: Props): JSX.Element => {
  return (
    <button className="filter-options" onClick={action}>
      {text}
    </button>
  );
};

export default FilterButton;
