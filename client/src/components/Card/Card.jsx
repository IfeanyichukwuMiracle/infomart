import course_img from "../../assets/course.jpg";

const Card = () => {
  return (
    <>
      <div className="cursor-pointer">
        <img src={course_img} alt="course_name" className="block rounded-sm" />
        <div>
          <p className="font-bold text-lg">Course Name</p>
          <p className="text-[.8rem] text-gray-600">Tutor name</p>
          <div className="text-sm">
            <strong>2,000</strong> enrolled
          </div>
          <p className="font-bold text-lg sm:text-xl">&#8358;99,950</p>
          <p className="text-[.93rem] bg-amber-200 w-max text-amber-900 font-semibold shadow-md rounded-sm py-[.1rem] px-1">
            Bestseller
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
