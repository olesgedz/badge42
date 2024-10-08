/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.tsx                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/10/18 01:49:28 by jaeskim           #+#    #+#             */
/*   Updated: 2022/04/05 00:45:48 by jaeskim          ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import Message from "./Message";
import SvgContainer from "../SvgContainer";

const ErrorContainer = () => (
  <SvgContainer color={"#FAFAFA"} width={495} height={195}>
    <Message />
  </SvgContainer>
);

export default ErrorContainer;
