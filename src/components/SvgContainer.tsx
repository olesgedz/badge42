/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   SvgContainer.tsx                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/11/04 23:11:26 by jaeskim           #+#    #+#             */
/*   Updated: 2020/11/22 17:48:39 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";

interface Props {
  color: string;
  width: number;
  height: number;
}

const SvgContainer: React.FC<Props> = ({ color, children, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        rx="4.5"
        height="99%"
        stroke="#E4E2E2"
        width={width - 1}
        fill={color}
        strokeOpacity="1"
        data-testid={"svg-container"}
      />
      {children}
    </svg>
  );
};

export default SvgContainer;
