import React, { Component } from "react";
import { Image } from "react-img-placeholder";

// kiểm tra link null hoặc rỗng, sau đó dùng Image library để hiển thị ảnh có placeholder

export default class CustomImage extends Component {
  render() {
    const { prefix, sublink, placeholderSrc } = this.props;

    if (sublink === null || sublink === "") {
      return <img src={placeholderSrc} />;
    }
    return <Image src={`${prefix}${sublink}`} height={1} width={1} placeholderSrc={placeholderSrc} />;
  }
}
