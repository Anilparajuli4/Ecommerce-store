"use client";
import React from "react";

function Category({ params }) {
  const id = params.slug;
  return (
    <div>
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running shoes
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Category;
